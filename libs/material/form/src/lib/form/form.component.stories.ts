import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { FormComponent } from './form.component';

import { within } from '@storybook/testing-library';
import {
  provideDefaultInputDebounceTime,
  provideDefaultInputErrorMesssageHandler,
  provideDefaultInputStatusIndicatorHandler,
} from '@webpackages/material/input';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  InputOption,
  MockCategoryCollectionService,
  MockEntityCollectionService,
  provideDefaultHttpSearchQueryBuilder,
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
  provideMockCategoryHttpClient,
} from '@webpackages/material/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  provideEntityData,
  EntityMetadataMap,
  EntityDataModuleConfig,
  withEffects,
} from '@ngrx/data';
import { FormControl, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

const entityMetadata: EntityMetadataMap = {
  Sample: {},
  Category: {},
};

const pluralNames = {
  Sample: 'Samples',
  Category: 'Categorys',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};

const formGroup = new FormGroup({
  name: new FormControl(null, []),
  description: new FormControl(null, []),
  dob: new FormControl(null, []),
  category: new FormControl(null, []),
});

const meta: Meta<FormComponent<any>> = {
  component: FormComponent,
  title: 'FormComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideNativeDateAdapter(),
        provideAnimations(),
        provideDefaultInputErrorMesssageHandler(),
        provideDefaultInputStatusIndicatorHandler(),
        provideDefaultInputDebounceTime(),
        provideHttpClient(
          withInterceptors([
            (req, next) => {
              return next(
                req.clone({
                  url: `http://localhost:3001/${req.url}`,
                })
              );
            },
          ])
        ),
        provideStore(),
        provideEffects(),
        provideEntityData(entityConfig, withEffects()),
        provideEntityCollectionService(MockCategoryCollectionService),
        provideFormGroup(formGroup),
        provideDefaultHttpSearchQueryBuilder(),
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
            resourceName: 'categorys',
            required: true,
            class: 'grow order-3',
            tabIndex: 3,
          },
          {
            name: 'description',
            label: 'Description',
            inputType: 'textarea',
            required: true,
            minLength: 3,
            maxLength: 100,
            class: 'w-full order-4',
            tabIndex: 4,
          },
        ] as InputOption[]),
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<FormComponent>;

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
