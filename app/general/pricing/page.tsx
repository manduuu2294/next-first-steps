import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
    keywords: ['Pricing Page' , 'Manuel' , 'informacion' , '...'],
   };

export default function PricingPage () {
    return (
        <>
           <span className="text-7xl">Pricing Page</span>
        </>
    )
}