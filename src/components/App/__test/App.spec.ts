import App from '../App.svelte';
import { render } from '@testing-library/svelte';

describe('testing getDisplayDateTime', () => {
  it('it works', async () => {
    const AppRendered = render(App, {
      date: 'Fri May 14',
      time: '16:44',
      period: 'afternoon',
    });

    expect(AppRendered.container).toMatchSnapshot();
  });
});
