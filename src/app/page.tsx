import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4 py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Template Next</h1>
        <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
          A modern Next.js template with TypeScript, Tailwind CSS, and shadcn/ui components.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sample Page</CardTitle>
            <CardDescription>Using TanStack React Query and Server Actions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page demonstrates how to use TanStack React Query with Server Actions for
              efficient data fetching and state management.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/sample" className="w-full">
              <Button className="w-full" variant="outline">
                Visit Sample Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Products Page</CardTitle>
            <CardDescription>Using React Server Components and Server Actions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page shows a full CRUD implementation using React Server Components and Server
              Actions for maximum performance.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/products" className="w-full">
              <Button className="w-full" variant="outline">
                Visit Products Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
