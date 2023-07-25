import { GitHubIcon } from '~/icons';
import { SystemIcon } from './SystemIcon';
import { component$ } from '@builder.io/qwik';

/**
 * GitHub icon pointing to our repository.
 */
export const GitHubIconLink = component$(() => (
  <SystemIcon
    label="Open GitHub repository"
    type="link"
    href="https://github.com/fabian-hiller/valibot"
    target="_blank"
  >
    <GitHubIcon class="h-full" />
  </SystemIcon>
));
