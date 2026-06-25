import React, { useState } from 'react';
import SqlPlayground, {
  DEFAULT_SETUP_SQL,
  DEFAULT_QUERY,
} from '../../../components/activities/sql-playground';
import ResizableLayout from '../../../components/activities/commons/ResizableLayout';
import AccessibleFormField from '../../../components/activities/commons/AccessibleFormField';
import LoadFromBase64 from '../../../components/activities/commons/LoadFromBase64';
import { generateIframe, unicodeToBase64 } from '../../../utils';
import useInput from '../../../hooks/useInput';

const INITIAL_SETUP_SQL = DEFAULT_SETUP_SQL.trim();

export default function CreationPage() {
  const [setupSql, setSetupSql] = useState(INITIAL_SETUP_SQL);
  const [defaultQuery, setDefaultQuery] = useState(DEFAULT_QUERY);
  const [instruction, setInstruction] = useState('');
  const [height, onHeightChange] = useInput('600');
  const [embedCode, setEmbedCode] = useState('');

  // The values that actually drive the preview. Updated only via "Apply" so
  // editing the schema doesn't rebuild the in-browser Postgres on every keystroke.
  const [preview, setPreview] = useState({
    setupSql: INITIAL_SETUP_SQL,
    defaultQuery: DEFAULT_QUERY,
    instruction: '',
  });

  const isPreviewStale = setupSql !== preview.setupSql
    || defaultQuery !== preview.defaultQuery
    || instruction !== preview.instruction;

  const applyPreview = () => {
    setPreview({ setupSql, defaultQuery, instruction });
  };

  const handleLoadFromBase64 = (data) => {
    const next = {
      setupSql: typeof data.setupSql === 'string' ? data.setupSql : setupSql,
      defaultQuery: typeof data.defaultQuery === 'string' ? data.defaultQuery : defaultQuery,
      instruction: typeof data.instruction === 'string' ? data.instruction : instruction,
    };
    setSetupSql(next.setupSql);
    setDefaultQuery(next.defaultQuery);
    setInstruction(next.instruction);
    setPreview(next);
  };

  const generateEmbedCode = () => {
    if (!setupSql.trim()) {
      // eslint-disable-next-line no-alert
      alert('Setup SQL tidak boleh kosong');
      return;
    }

    const data = unicodeToBase64(JSON.stringify({ setupSql, defaultQuery, instruction }));
    const src = `${window.location.protocol}//${window.location.host}/activities/sql-playground?data=${encodeURIComponent(data)}`;

    setEmbedCode(generateIframe(src, 'Dicoding Learning Activities - SQL Playground', height));
  };

  const formPanel = (
    <div className="creation-form">
      <header>
        <h1>SQL Playground Generator</h1>
        <p>Buat playground SQL interaktif dengan skema dan data awal Anda sendiri</p>
      </header>

      <LoadFromBase64
        onLoad={handleLoadFromBase64}
        activityType="sql-playground"
      />

      <form onSubmit={(e) => e.preventDefault()}>
        <AccessibleFormField
          id="setup-sql"
          label="Setup SQL"
          type="textarea"
          value={setupSql}
          onChange={(e) => setSetupSql(e.target.value)}
          placeholder="CREATE TABLE ...; INSERT INTO ...;"
          helpText="Perintah SQL untuk membuat skema dan mengisi data awal. Dijalankan saat playground dimuat dan saat di-reset."
          rows={12}
          required
        />

        <AccessibleFormField
          id="default-query"
          label="Default Query"
          type="textarea"
          value={defaultQuery}
          onChange={(e) => setDefaultQuery(e.target.value)}
          placeholder="SELECT * FROM ...;"
          helpText="Query yang muncul di editor saat playground pertama kali dibuka."
          rows={6}
        />

        <AccessibleFormField
          id="instruction"
          label="Instruction Text"
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          placeholder="Instruksi yang ditampilkan kepada siswa (opsional)"
          helpText="Teks instruksi opsional yang ditampilkan di atas playground."
        />

        <AccessibleFormField
          id="height"
          label="Height (pixels)"
          type="number"
          value={height}
          onChange={onHeightChange}
          helpText="Tinggi iframe dalam pixel"
          min="300"
          max="1200"
        />

        <div className="form-actions">
          <button
            type="button"
            className="form-field__button form-field__button--primary"
            onClick={generateEmbedCode}
          >
            Generate Embed Code
          </button>
        </div>

        <AccessibleFormField
          id="embed-code"
          label="Embed Code"
          type="textarea"
          value={embedCode}
          readOnly
          placeholder="Embed code akan muncul di sini setelah generate"
          helpText="Salin kode ini untuk menyematkan aktivitas di halaman web"
          rows={4}
        />
      </form>
    </div>
  );

  const previewPanel = (
    <div className="creation-preview">
      <header>
        <h2>Preview</h2>
        <p>Pratinjau SQL playground yang akan dibuat</p>
      </header>

      <div className="form-actions">
        <button
          type="button"
          className="form-field__button form-field__button--primary"
          onClick={applyPreview}
          disabled={!isPreviewStale}
        >
          Perbarui Pratinjau
        </button>
        {isPreviewStale && (
          <span className="form-field__help">
            Pratinjau belum sesuai dengan perubahan terbaru. Klik untuk memperbarui.
          </span>
        )}
      </div>

      <div role="region" aria-label="SQL Playground preview">
        <SqlPlayground
          setupSql={preview.setupSql}
          defaultQuery={preview.defaultQuery}
          instructionsText={preview.instruction}
        />
      </div>
    </div>
  );

  return (
    <ResizableLayout
      leftPanel={formPanel}
      rightPanel={previewPanel}
      initialLeftWidth={45}
    />
  );
}
