import { AddSampleForm } from '@/features/sample/components/add-sample-form';
import { SampleList } from '@/features/sample/components/sample-list';

export default function SamplePage() {
  return (
    <main>
      This is SamplePage
      <div>
        <AddSampleForm />
      </div>
      <div>
        List of Samples(Todos)
        <SampleList />
      </div>
    </main>
  );
}
