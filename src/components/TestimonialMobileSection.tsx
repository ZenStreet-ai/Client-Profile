import { QuotesMobile } from "@/assets/icons";
import { Card, CardContent } from "@/components/ui/card";

export interface TestimonialProps {
  id: number;
  quote: string;
  author: string;
}

const Testimonial = ({ quote, author }: TestimonialProps) => {
  return (
    <Card className="w-[148px] h-[144px] flex flex-col bg-white shadow-2xl">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex justify-start">
          <QuotesMobile />
        </div>
        <p className="text-[9px] pl-3 mb-1 flex-grow">&quot;{quote}&quot;</p>
        <p className="text-[8.46px] text-gray-600">{author}</p>
      </CardContent>
    </Card>
  );
};

interface TestimonialWrapperProps {
  testimonials: TestimonialProps[];
}

const TestimonialWrapperMobile = ({
  testimonials,
}: TestimonialWrapperProps) => {
  return (
    <div className="w-full h-[409px] py-3">
      <h2 className="text-[15px] leading-5">Client Testimonials</h2>
      <div className="py-3">
        <div className="flex flex-wrap gap-3">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialWrapperMobile;
