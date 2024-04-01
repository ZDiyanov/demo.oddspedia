import { vi, expect, test } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import { configs } from '@/configs';
import TeamsSearch from '@/components/TeamsSearch';

test('my types work properly', () => {
  expect(TeamsSearch).toBeTruthy();

  const wrapper = shallowMount(TeamsSearch, {
    global: {
      plugins: [createTestingPinia({
        createSpy: vi.fn,
      })],
      provide: {
        $config: configs,
      },
    },
  });
});
