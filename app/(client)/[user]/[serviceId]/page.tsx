import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Mountain } from 'lucide-react';

const faqs: { q: string; a: string }[] = [
  {
    q: "Why wouldn't I just hire a full-time designer?",
    a: "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. \n\n With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your designer when you have work available for them.",
  },
  {
    q: 'Is there a limit to how many requests I can have?',
    a: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
  },
  {
    q: 'How fast will I receive my designs?',
    a: 'On average, most requests are completed in just two days or less. However, more complex requests can take longer.',
  },
  {
    q: 'Who are the designers?',
    a: "You might be surprised to hear this, but Designjoy is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers.",
  },
  {
    q: 'How does the pause feature work?',
    a: "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy. \n\n Billing cycles are based on 31 day period. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.",
  },
  {
    q: 'What programs do you design in?',
    a: 'Most requests are designed using Figma.',
  },
  {
    q: "What if I don't like the design?",
    a: "No worries! We'll continue to revise the design until you're 100% satisfied.",
  },
  {
    q: 'What if I only have a single request?',
    a: "That's fine. You can pause your subscription when finished and return  when you have additional design needs. There's no need to let the remainder of your subscription go to waste.",
  },
  {
    q: "Are there any refunds if I don't like the service?",
    a: 'Due to the high quality nature of the work, there will be no refunds issued.',
  },
];

export default function ServicePage({
  params,
}: {
  params: { user: string; serviceId: string };
}) {
  return (
    <main className='relative'>
      <div className='flex justify-between'>
        <div className='max-w-sm'>
          <h1 className='text-4xl text-primary'>DesignJoy</h1>
          <section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            mollitia vitae perferendis, distinctio sed molestiae atque libero
            quae assumenda nulla nostrum nam earum voluptatibus dolores autem et
            tempore laudantium recusandae?
          </section>

          <Image src='/home-office.svg' height={300} width={400} alt='Image' />
        </div>
        <section
          id='pricing'
          className='flex justify-between items-center gap-2'
        >
          <Card className='w-[350px]'>
            <CardHeader>
              <CardTitle>Monthly</CardTitle>
              <CardDescription>
                No minimum commitment. Pause or cancel anytime.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='mb-1'>
                <p className='font-extrabold text-2xl'>$4,995/m</p>
                <p className='text-muted-foreground text-xs'>
                  Pause or cancel anytime.
                </p>
              </div>
              <Button className='w-full'>Get Started</Button>
              <h4 className='font-semibold m-1'>What&apos;s included:</h4>
              <ul className='list-disc px-2 text-sm'>
                <li>One request at a time</li>
                <li>Unlimited brands</li>
                <li>Unlimited Users</li>
                <li>Unlimited users Unlimited stock photos via Shutterstock</li>
                <li>Easy credit-card payments </li>
                <li>Pause or cancel anytime</li>
              </ul>
            </CardContent>
          </Card>
          <Card className='w-[350px]'>
            <CardHeader>
              <CardTitle>Quarterly</CardTitle>
              <CardDescription>Save $500 per month.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='mb-1'>
                <p className='font-extrabold text-2xl'>$4,995/m</p>
                <p className='text-muted-foreground text-xs'>Paid quarterly.</p>
              </div>
              <Button className='w-full'>Get Started</Button>
              <h4 className='font-semibold m-1'>What&apos;s included:</h4>
              <ul className='list-disc px-2 text-sm'>
                <li>One request at a time</li>
                <li>Unlimited brands</li>
                <li>Unlimited Users</li>
                <li>Unlimited users Unlimited stock photos via Shutterstock</li>
                <li>Easy credit-card payments </li>
                {/* <li>Pause or cancel anytime</li> */}
              </ul>
            </CardContent>
          </Card>
          <Card className='w-[350px]'>
            <CardHeader>
              <CardTitle>Yearly</CardTitle>
              <CardDescription>Save $1,000 per month.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='mb-1'>
                <p className='font-extrabold text-2xl'>$3,995/m</p>
                <p className='text-muted-foreground text-xs'>Paid annually.</p>
              </div>
              <Button className='w-full'>Get Started</Button>
              <h4 className='font-semibold m-1'>What&apos;s included:</h4>
              <ul className='list-disc px-2 text-sm'>
                <li>One request at a time</li>
                <li>Unlimited brands</li>
                <li>Unlimited Users</li>
                <li>Unlimited users Unlimited stock photos via Shutterstock</li>
                <li>Easy credit-card payments </li>
                {/* <li>Pause or cancel anytime</li> */}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
      <section id='faqs'>
        <h3 className='text-3xl text-primary mt-4'>faqs</h3>
        <Accordion type='single' collapsible className='w-full'>
          {faqs.map(({ q, a }, idx) => (
            <AccordionItem key={`acc-key-${idx}`} value={`item-${idx + 1}`}>
              <AccordionTrigger>{q}</AccordionTrigger>
              <AccordionContent>{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <div className='p-2 sticky ml-auto bottom-2 text-xs flex justify-center items-center gap-2 bg-primary rounded-md w-fit text-primary-foreground'>
        <p>Powered by</p>
        <div className='flex gap-1 justify-center items-center'>
          <Mountain className='h-5 w-5' />
          <p className='font-semibold'>Nuvvo</p>
        </div>
      </div>
    </main>
  );
}
