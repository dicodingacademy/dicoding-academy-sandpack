import React, { useState } from 'react';
import AccessibleFormField from './AccessibleFormField';
import { base64ToUnicode } from '../../../utils';

function LoadFromBase64({ onLoad, activityType }) {
  const [base64Code, setBase64Code] = useState('');
  const [error, setError] = useState('');

  const handleLoad = () => {
    if (!base64Code.trim()) {
      setError('Masukkan base64 code terlebih dahulu');
      return;
    }

    try {
      // Extract base64 from iframe or direct input
      let extractedBase64 = base64Code.trim();
      
      // If it's an iframe, extract the data parameter
      if (base64Code.includes('<iframe') && base64Code.includes('data=')) {
        const match = base64Code.match(/data=([^"&\s]+)/);
        if (match) {
          extractedBase64 = decodeURIComponent(match[1]);
        }
      }

      // Decode base64
      const decodedData = JSON.parse(base64ToUnicode(extractedBase64));
      
      // Validate activity type if needed
      const expectedKeys = {
        'fill-in-the-blank': ['template', 'answers'],
        'flashcards': ['cards'],
        'drag-and-order': ['items']
      };

      const requiredKeys = expectedKeys[activityType];
      if (requiredKeys && !requiredKeys.some(key => decodedData.hasOwnProperty(key))) {
        throw new Error(`Data tidak sesuai untuk aktivitas ${activityType}`);
      }

      onLoad(decodedData);
      setBase64Code('');
      setError('');
    } catch (err) {
      setError('Format base64 tidak valid atau tidak sesuai dengan aktivitas ini');
    }
  };

  return (
    <div className="load-from-base64">
      <AccessibleFormField
        id="base64-input"
        label="Load dari Base64 Code"
        type="textarea"
        value={base64Code}
        onChange={(e) => setBase64Code(e.target.value)}
        placeholder="Paste embed code atau base64 data di sini..."
        helpText="Paste kode embed iframe atau base64 data untuk memuat konfigurasi yang sudah ada"
        error={error}
        rows={3}
      />
      
      <div className="form-actions">
        <button 
          type="button" 
          onClick={handleLoad}
          className="form-field__button form-field__button--primary"
          disabled={!base64Code.trim()}
        >
          Load Configuration
        </button>
      </div>
    </div>
  );
}

export default LoadFromBase64;
