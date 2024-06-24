import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CreateComponent } from './create.component';

import { within } from '@storybook/testing-library';
import {
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '@webpackages/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  MockEntityCollectionService,
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  provideEntityData,
  EntityMetadataMap,
  EntityDataModuleConfig,
  withEffects,
} from '@ngrx/data';
import { FormControl, FormGroup } from '@angular/forms';

const entityMetadata: EntityMetadataMap = {
  Sample: {},
};

const pluralNames = {
  Sample: 'Samples',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};

const formGroup = new FormGroup({
  name: new FormControl(null, []),
  description: new FormControl(null, []),
  dob: new FormControl(null, []),
});


const meta: Meta<CreateComponent<any>> = {
  component: CreateComponent,
  title: 'CreateComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideDefaultInputErrorMesssageHandler(),
        provideDefaultInputStatusIndicatorHandler(),
        provideDefaultInputDebounceTime(),
        provideHttpClient(),
        provideStore(),
        provideEffects(),
        provideEntityData(entityConfig, withEffects()),
        provideEntityCollectionService(MockEntityCollectionService),
        provideFormGroup(formGroup),
        provideInputOptions([
          {
            name: 'name',
            label: 'Name',
            inputType: 'text',
            required: true,
            minLength: 3,
            maxLength: 100,
          },
          {
            name: 'description',
            label: 'Description',
            inputType: 'textarea',
            required: true,
            minLength: 3,
            maxLength: 100,
          },
          {
            name: 'dob',
            label: 'Date of birth',
            inputType: 'date',
            required: true,
          },
        ]),
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<CreateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/create works!/gi)).toBeTruthy();
  },
};
