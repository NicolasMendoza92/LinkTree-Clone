'use client';
import PricingCard from '@/components/layouts/PricingCard';
import React from 'react'

export default function PricingPage() {
  return (
    <section className='p-12  pt-32 mx-auto'>
      <div className='flex flex-col items-center'>
        <h1 className='text-5xl font-bold'>
          Pricing
        </h1>
        <h2 className='text-gray-500 text-xl mt-6'>
          Save up to 30% on annual plans.
        </h2>
        <div className="button r" id="button-9">
          <input type="checkbox" className="checkbox" />
          <div className="knobs">
            <span></span>
          </div>
          <div className="layer"></div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-3 mx-auto md:grid-cols-3'>
        <PricingCard>
          <div className='bg-gray-400 rounded-t-lg p-5'>
            <h1 className='text-4xl font-bold text-center'>Free</h1>
          </div>
          <div className='flex flex-col gap-3 mt-3'>
            <p className='p-5'>For your personal Linktree Everything you do, in one single link Key features </p>
            <hr />
            <p className='py-2 px-4'>Unlimited links</p>
            <hr />
            <p className='py-2 px-4'>Tip Jar & other monetization</p>
          </div>
          <div className='mt-auto'>
            <div className='mt-6 p-4'>
              <p className='text-2xl font-bold'>$ 0 </p>
              <span>Free, for ever</span>
            </div>
            <button className="bg-white shadow text-center py-4 px-4 flex gap-3 mx-auto mb-4 items-center justify-center rounded-lg border border-zinc-600 ">
              Join for Free
            </button>
          </div>
        </PricingCard>
        <PricingCard>
          <div className='bg-gray-400 rounded-t-lg p-5'>
            <h1 className='text-4xl font-bold text-center'>Starter</h1>
          </div>
          <div className='flex flex-col gap-3 mt-3'>
            <p className='p-5'>
              For growing influencers Better customization, more audience insights Everything in Free, plus:
            </p>
            <hr />
            <p className='py-2 px-4'>Upgraded style options</p>
            <hr />
            <p className='py-2 px-4'>Affiliate marketing tools</p>
            <hr />
            <p className='py-2 px-4'>Scheduling</p>
          </div>
          <div className='mt-auto'>
          <div className='mt-6 p-4'>
            <p className='text-2xl font-bold'>$ 4 </p>
            <span>USD/month, billed annually</span>
          </div>
          <button
            className="bg-white shadow text-center py-4 px-4 flex gap-3 mx-auto mb-4 items-center justify-center rounded-lg border border-zinc-600 ">
            Get starter
          </button>
          </div>
        </PricingCard>
        <PricingCard>
          <div className='bg-blue-600 rounded-t-lg p-5 flex flex-wrap justify-between'>
            <h1 className='text-4xl font-bold text-center'>Pro</h1>
            <span className='text-sm bg-yellow-200 px-2 py-2 rounded-md'>Most wanted</span>
          </div>
          <div className='flex flex-col gap-3 mt-3'>
            <p className='p-5'>
              For content creators and businesses Advanced analytics, automatic link apps and auto-embeds Everything in Starter, plus:
            </p>
            <hr />
            <p className='py-2 px-4'> Advanced customization options </p>
            <hr />
            <p className='py-2 px-4'>Conversion tracking </p>
            <hr />
            <p className='py-2 px-4'>Upgraded customer support </p>
            <hr />
            <p className='py-2 px-4'>Option to hide Linktree logo</p>
          </div>
          <div className='mt-auto'>
          <div className='mt-6 p-4'>
            <p className='text-2xl font-bold'>Free for 7 days </p>
            <span>7 USD/month, billed annually</span>
          </div>
          <button
            className="bg-blue-100 shadow text-center py-4 px-4 flex gap-3 mx-auto mb-4 items-center justify-center rounded-lg border border-zinc-600 ">
            Get Pro
          </button>
          </div>
          
        </PricingCard>
      </div>
    </section>
  )
}
