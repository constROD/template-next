import { useMutation } from '@tanstack/react-query';

import { createSampleData } from '@/data/sample/create-sample';

export type UseSampleCreateMutationArgs = {
  onSuccess?: () => void;
  onError?: () => void;
};

export function useSampleCreateMutation(args: UseSampleCreateMutationArgs = {}) {
  return useMutation({
    mutationFn: createSampleData,
    onSuccess: args.onSuccess,
    onError: args.onError,
  });
}
