import { deleteSampleAction } from '@/features/sample/actions/delete-sample-action';
import { AddSampleForm } from '@/features/sample/components/add-sample-form';
import { Button } from '@/shared/components/ui/button';
import { getSamplesData } from '@/shared/data/get-samples';

export default async function RSCandServerActionPage() {
  const data = await getSamplesData();

  return (
    <div className="flex flex-col gap-5">
      <AddSampleForm />
      {data.map(sample => (
        <div className="flex max-w-96 flex-col gap-2" key={sample.id}>
          <div>ID: {sample.id}</div>
          <div>TITLE: {sample.title}</div>
          <div>BODY: {sample.body}</div>
          <div>USERID: {sample.userId}</div>
          <form action={deleteSampleAction}>
            <input type="hidden" name="id" value={sample.id} />
            <Button type="submit">Delete</Button>
          </form>
        </div>
      ))}
    </div>
  );
}
