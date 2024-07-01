import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { FormComponent } from './form.component';

import { within } from '@storybook/testing-library';

import {
  MockCategoryCollectionService,
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyOptions } from '@webpackages/types';
import { importProvidersFrom } from '@angular/core';
import { FormTestingModule } from '../testing';
import { fn } from '@storybook/test';

const formGroup = new FormGroup({
  name: new FormControl(null, [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
  ]),
  description: new FormControl(null, [Validators.maxLength(1000)]),
  dob: new FormControl(null, [Validators.required]),
  category: new FormControl(null, [Validators.required]),
});

const meta: Meta<FormComponent<any>> = {
  component: FormComponent,
  title: 'FormComponent',
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(FormTestingModule),
        provideEntityCollectionService(MockCategoryCollectionService),
        provideFormGroup(formGroup),
        provideInputOptions([
          {
            name: 'name',
            label: 'Name',
            inputType: 'text',
            required: true,
            minLength: 3,
            maxLength: 100,
            class: 'order-1 grow',
            tabIndex: 1,
          },
          {
            name: 'dob',
            label: 'Date of birth',
            inputType: 'date',
            required: true,
            class: 'order-2 grow',
            tabIndex: 2,
          },
          {
            name: 'category',
            label: 'Select Category',
            inputType: 'search',
            resourceName: 'category',
            resourceLabelProperty: 'name',
            required: true,
            class: 'grow order-3',
            tabIndex: 3,
          },
          {
            name: 'description',
            label: 'Description',
            inputType: 'textarea',
            maxLength: 1000,
            class: 'w-full order-4',
            tabIndex: 4,
          },
        ] as Partial<PropertyOptions>[]),
      ],
    }),
  ],
  argTypes: {
    submittedEvent: fn,
    submittedEventSuccess: fn,
    submittedEventError: fn,
  },
};
export default meta;

type Story = StoryObj<FormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  ...Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/create works!/gi)).toBeTruthy();
  },
};
