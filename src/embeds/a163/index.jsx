import React from 'react';
import FormCanSubmit01 from './01-form-can-submit';
import FormCanSubmitFiles02 from './02-form-can-submit-files';
import FormFieldText03 from './03-form-field-text';
import FormFieldTextarea04 from './04-form-field-textarea';
import FormFieldAppropriate05 from './05-form-field-appropriate';
import FormFieldDate06 from './06-form-field-date';
import FormFieldCheckRadio07 from './07-form-field-check-radio';
import FormFieldSelect08 from './08-form-field-select';
import FormFieldHidden09 from './09-form-field-hidden';
import AttributeTypeAttribute10 from './10-attribute-type-attribute';
import AttributeInputMode11 from './11-attribute-inputmode';
import AttributePlaceholder12 from './12-attribute-placeholder';
import AttributePlaceholderAlternative13 from './13-attribute-placeholder-alternative';
import ValidationTypeValidation14 from './14-validation-type-validation';
import ValidationRequired15 from './15-validation-required';
import ValidationMinMax16 from './16-validation-min-max';
import ValidationStep17 from './17-validation-step';
import ValidationRegex18 from './18-validation-regex';
import ValidationCustomA19 from './19-a-validation-custom';
import ValidationCustomB19 from './19-b-validation-custom';
import ValidationCustomC19 from './19-c-validation-custom';
import AutofillHowWork20 from './20-autofill-how-work';
import AutofillAutoCompleteAttr21 from './21-autofill-autocomplete-attr';
import AutofillAutoCompleteOff22 from './22-autofill-autocomplete-off';
import StylingContohStylingFocus23 from './23-styling-contoh-styling-focus';
import StylingSizingFontSize24 from './24-styling-sizing-font-size';
import StylingBorderTextInput25 from './25-styling-border-text-input';
import StylingAccentColorInput26 from './26-styling-accent-color-input';
import StylingInvalidState27 from './27-styling-invalid-state';
import JavaScriptValueAttr29 from './29-javascript-value-attr';
import JavaScriptSetValueUsingSetAttr30 from './30-javascript-set-value-using-setattr';
import JavaScriptGetValue31 from './31-javascript-get-value';
import JavaScriptConditionalForm32 from './32-javascript-conditional-form';
import JavaScriptConditionalFormWithPreventDefault33
  from './33-javascript-conditional-form-with-prevent-default';
import SemanticDivAsContainer34 from './34-semantic-div-as-container';
import SemanticContentEditable35 from './35-semantic-contenteditable';
import BestPracticeExtraValidation36 from './36-best-practice-extra-validation';
import BestPracticeClearCaptionSubmit37 from './37-best-practice-clear-caption-submit';

const a163Routes = [
  {
    path: '/a163/01-form-can-submit',
    element: <FormCanSubmit01 />,
  },
  {
    path: '/a163/02-form-can-submit-files',
    element: <FormCanSubmitFiles02 />,
  },
  {
    path: '/a163/03-form-field-text',
    element: <FormFieldText03 />,
  },
  {
    path: '/a163/04-form-field-textarea',
    element: <FormFieldTextarea04 />,
  },
  {
    path: '/a163/05-form-field-appropriate',
    element: <FormFieldAppropriate05 />,
  },
  {
    path: '/a163/06-form-field-date',
    element: <FormFieldDate06 />,
  },
  {
    path: '/a163/07-form-field-check-radio',
    element: <FormFieldCheckRadio07 />,
  },
  {
    path: '/a163/08-form-field-select',
    element: <FormFieldSelect08 />,
  },
  {
    path: '/a163/09-form-field-hidden',
    element: <FormFieldHidden09 />,
  },
  {
    path: '/a163/10-attribute-type-attribute',
    element: <AttributeTypeAttribute10 />,
  },
  {
    path: '/a163/11-attribute-inputmode',
    element: <AttributeInputMode11 />,
  },
  {
    path: '/a163/12-attribute-placeholder',
    element: <AttributePlaceholder12 />,
  },
  {
    path: '/a163/13-attribute-placeholder-alternative',
    element: <AttributePlaceholderAlternative13 />,
  },
  {
    path: '/a163/14-validation-type-validation',
    element: <ValidationTypeValidation14 />,
  },
  {
    path: '/a163/15-validation-required',
    element: <ValidationRequired15 />,
  },
  {
    path: '/a163/16-validation-min-max',
    element: <ValidationMinMax16 />,
  },
  {
    path: '/a163/17-validation-step',
    element: <ValidationStep17 />,
  },
  {
    path: '/a163/18-validation-regex',
    element: <ValidationRegex18 />,
  },
  {
    path: '/a163/19-a-validation-custom',
    element: <ValidationCustomA19 />,
  },
  {
    path: '/a163/19-b-validation-custom',
    element: <ValidationCustomB19 />,
  },
  {
    path: '/a163/19-c-validation-custom',
    element: <ValidationCustomC19 />,
  },
  {
    path: '/a163/20-autofill-how-work',
    element: <AutofillHowWork20 />,
  },
  {
    path: '/a163/21-autofill-autocomplete-attr',
    element: <AutofillAutoCompleteAttr21 />,
  },
  {
    path: '/a163/22-autofill-autocomplete-off',
    element: <AutofillAutoCompleteOff22 />,
  },
  {
    path: '/a163/23-styling-contoh-styling-focus',
    element: <StylingContohStylingFocus23 />,
  },
  {
    path: '/a163/24-styling-sizing-font-size',
    element: <StylingSizingFontSize24 />,
  },
  {
    path: '/a163/25-styling-border-text-input',
    element: <StylingBorderTextInput25 />,
  },
  {
    path: '/a163/26-styling-accent-color-input',
    element: <StylingAccentColorInput26 />,
  },
  {
    path: '/a163/27-styling-invalid-state',
    element: <StylingInvalidState27 />,
  },
  {
    path: '/a163/28-javascript-value-attr',
    element: <JavaScriptValueAttr29 />,
  },
  {
    path: '/a163/30-javascript-set-value-using-setattr',
    element: <JavaScriptSetValueUsingSetAttr30 />,
  },
  {
    path: '/a163/31-javascript-get-value',
    element: <JavaScriptGetValue31 />,
  },
  {
    path: '/a163/32-javascript-conditional-form',
    element: <JavaScriptConditionalForm32 />,
  },
  {
    path: '/a163/33-javascript-conditional-form-with-prevent-default',
    element: <JavaScriptConditionalFormWithPreventDefault33 />,
  },
  {
    path: '/a163/34-semantic-div-as-container',
    element: <SemanticDivAsContainer34 />,
  },
  {
    path: '/a163/53-semantic-contenteditable',
    element: <SemanticContentEditable35 />,
  },
  {
    path: '/a163/36-best-practice-extra-validation',
    element: <BestPracticeExtraValidation36 />,
  },
  {
    path: '/a163/37-best-practice-clear-caption-submit',
    element: <BestPracticeClearCaptionSubmit37 />,
  },
];

export { a163Routes };
