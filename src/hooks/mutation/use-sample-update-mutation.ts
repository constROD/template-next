import { useMutation } from '@tanstack/react-query';

import { updateSampleData } from '@/data/sample/update-sample';

export type UseSampleUpdateMutationArgs = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function useSampleUpdateMutation(args: UseSampleUpdateMutationArgs = {}) {
  return useMutation({
    mutationFn: updateSampleData,
    onSuccess: args.onSuccess,
    onError: args.onError,
  });
}
