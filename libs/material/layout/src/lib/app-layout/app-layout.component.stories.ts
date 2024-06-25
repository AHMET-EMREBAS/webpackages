import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AppLayoutComponent } from './app-layout.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideNavListItems } from '@webpackages/material/core';

const meta: Meta<AppLayoutComponent> = {
  component: AppLayoutComponent,
  title: 'AppLayoutComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideRouter([
          {
            path: 'home',
            component: AppLayoutComponent,
          },

          {
            path: 'about',
            component: AppLayoutComponent,
          },
          {
            path: 'services',
            component: AppLayoutComponent,
          },
        ]),
        provideNavListItems([
          { label: 'Home', route: 'home', icon: 'home' },
          { label: 'About', route: 'about', icon: 'info' },
          { label: 'Services', route: 'services', icon: 'apps' },
        ]),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<AppLayoutComponent>;

export const Primary: Story = {};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/app-layout works!/gi)).toBeTruthy();
  },
};
