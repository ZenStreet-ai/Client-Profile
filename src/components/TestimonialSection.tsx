import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quotes } from "@/assets/icons";

export interface TestimonialProps {
  id: number;
  quote: string;
  author: string;
}

const Testimonial = ({ quote, author }: TestimonialProps) => {
  return (
    <Card className="w-64 h-44 flex flex-col bg-white shadow-xl">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex justify-start mb-2">
          <Quotes />
        </div>
        <p className="text-sm pl-3 mb-2 flex-grow">&quot;{quote}&quot;</p>
        <p className="text-xs text-gray-600">{author}</p>
      </CardContent>
    </Card>
  );
};

interface TestimonialWrapperProps {
  testimonials: TestimonialProps[];
}

const TestimonialWrapper = ({ testimonials }: TestimonialWrapperProps) => {
  return (
    <div className="w-full h-[409px]">
      <h2 className="text-[24px] leading-9 p-3">Client Testimonials</h2>
      <div className="">
        <div className="flex flex-wrap gap-3">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialWrapper;
