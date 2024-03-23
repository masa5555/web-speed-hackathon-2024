import useSWR from 'swr';

import { episodeApiClient } from '../apiClient/episodeApiClient';

export function useEpisode(...[options]: Parameters<typeof episodeApiClient.fetch>) {
  return useSWR(episodeApiClient.fetch$$key(options), episodeApiClient.fetch, { suspense: true });
}

export function useEpisodeWithOutSuspense(...[options]: Parameters<typeof episodeApiClient.fetch>) {
  return useSWR(episodeApiClient.fetch$$key(options), episodeApiClient.fetch, { suspense: false });
}
