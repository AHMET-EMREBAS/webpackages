import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { ProductFormComponent } from './product-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  provideDefaultHttpSearchQueryBuilder,
  provideEntityCollectionService,
  provideFormGroup,
  provideInputOptions,
} from '@webpackages/material/core';
import { ProductService, entityConfig } from '@webpackages/clients/ngrx';
import { provideDefaultInputErrorMesssageHandler } from '@webpackages/material/input';
import { provideDefaultInputOptions } from '@webpackages/material/input';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { toFormInputOptions } from '@webpackages/types';
import { ProductMetadata } from '@webpackages/metadata';
import { provideRouter } from '@angular/router';
import { ProductFormGroup } from '@webpackages/clients/form-groups';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<ProductFormComponent> = {
  component: ProductFormComponent,
  title: 'ProductFormComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideRouter([]),
        provideFormGroup(ProductFormGroup),
        provideInputOptions(toFormInputOptions(ProductMetadata)),
        provideDefaultHttpSearchQueryBuilder(),
        provideHttpClient(
          withInterceptors([
            (req, next) =>
              next(req.clone({ url: `http://localhost:3001/${req.url}` })),
          ])
        ),
        provideStore(),
        provideEffects(),
        provideEntityData(entityConfig, withEffects()),
        provideDefaultInputErrorMesssageHandler(),
        provideEntityCollectionService(ProductService),
        provideDefaultInputOptions(),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<ProductFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/product-form works!/gi)).toBeTruthy();
  },
};
