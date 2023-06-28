import React from 'react';

import PendahuluanEvent01 from './01-pendahuluan-event';
import EventBubbling02 from './02-event-bubbling';
import EventCapturing03 from './03-event-capturing';
import FormOnsubmit04 from './04-form-onsubmit';
import InputEventFormPrepare05A from './05a-input-event-form';
import InputEventFormOninput05B from "./05b-input-event-form.jsx";
import InputEventFormOnfocus05C from "./05c-input-event-form.jsx";
import InputEventFormOnblur05D from "./05d-input-event-form-onblur.jsx";
import InputEventFormOnchange05E from "./05e-input-event-form-onchange.jsx";
import InputEventFormOncopy05F from "./05f-input-event-form-oncopy.jsx";
import InputEventFormOnpaste05G from "./05g-input-event-form-onpaste.jsx";
import InputEventFormComplete05H from "./05h-input-event-form-complete.jsx";
import JSInWebInternal06A from "./06a-js-in-web-internal.jsx";
import JSInWebExternal06B from "./06b-js-in-web-external.jsx";
import BOMMethodAlertWithVariable07B from "./07b-bom-method-alert-with-variable.jsx";
import BOMMethodAlert07A from "./07a-bom-method-alert.jsx";
import BOMMethodPrompt08A from "./08a-bom-method-prompt.jsx";
import BOMMethodPromptDataTypeDefault08B from "./08b-bom-method-prompt-data-type-default.jsx";
import BOMMethodPromptConversion08C from "./08b-bom-method-prompt-data-type-default.jsx";
import BOMMethodPromptDefaultValue08D from "./08d-bom-method-prompt-default-value.jsx";
import BOMConsole09 from "./09-bom-console.jsx";
import BOMAlertHack10 from "./10-bom-alert-hack.jsx";

const a315Routes = [
  {
    path: '/a315/01-pendahuluan-event',
    element: <PendahuluanEvent01 />,
  },
  {
    path: '/a315/02-event-bubbling',
    element: <EventBubbling02 />,
  },
  {
    path: '/a315/03-event-capturing',
    element: <EventCapturing03 />,
  },
  {
    path: '/a315/04-form-onsubmit',
    element: <FormOnsubmit04 />,
  },
  {
    path: '/a315/05a-input-event-form-prepare',
    element: <InputEventFormPrepare05A />,
  },
  {
    path: '/a315/05b-input-event-form-oninput',
    element: <InputEventFormOninput05B />,
  },
  {
    path: '/a315/05c-input-event-form-onfocus',
    element: <InputEventFormOnfocus05C />,
  },
  {
    path: '/a315/05d-input-event-form-onblur',
    element: <InputEventFormOnblur05D />,
  },
  {
    path: '/a315/05e-input-event-form-onchange',
    element: <InputEventFormOnchange05E />,
  },
  {
    path: '/a315/05f-input-event-form-oncopy',
    element: <InputEventFormOncopy05F />,
  },
  {
    path: '/a315/05g-input-event-form-onpaste',
    element: <InputEventFormOnpaste05G />,
  },
  {
    path: '/a315/05h-input-event-form-complete',
    element: <InputEventFormComplete05H />,
  },
  {
    path: '/a315/06a-js-in-web-internal',
    element: <JSInWebInternal06A />,
  },
  {
    path: '/a315/06b-js-in-web-external',
    element: <JSInWebExternal06B />,
  },
  {
    path: '/a315/07a-bom-method-alert',
    element: <BOMMethodAlert07A />,
  },
  {
    path: '/a315/07b-bom-method-alert-with-variable',
    element: <BOMMethodAlertWithVariable07B />,
  },
  {
    path: '/a315/08a-bom-method-prompt',
    element: <BOMMethodPrompt08A />,
  },
  {
    path: '/a315/08b-bom-method-prompt-data-type-default',
    element: <BOMMethodPromptDataTypeDefault08B />,
  },
  {
    path: '/a315/08c-bom-method-prompt-conversion',
    element: <BOMMethodPromptConversion08C />,
  },
  {
    path: '/a315/08d-bom-method-prompt-default-value',
    element: <BOMMethodPromptDefaultValue08D />,
  },
  {
    path: '/a315/09-bom-console',
    element: <BOMConsole09 />,
  },
  {
    path: '/a315/10-bom-alert-hack',
    element: <BOMAlertHack10 />,
  },
];

export { a315Routes };