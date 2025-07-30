import React from 'react';
import BasicInformation from './BasicInformation';
import ProfessionalDetails from './ProfessionalDetails';
import Skills from './Skills';
import ContactInformation from './ContactInformation';
import Resume from './Resume';
import FormActions from './FormActions';

const FormContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 form-content">
      <div className="form-left space-y-8">
        <BasicInformation />
        <ProfessionalDetails />
      </div>
      <div className="form-right space-y-8">
        <Skills />
        <ContactInformation />
        <Resume />
        <FormActions />
      </div>
    </div>
  );
};

export default FormContent;
