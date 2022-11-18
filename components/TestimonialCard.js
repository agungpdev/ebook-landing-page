export default function TestimonialCard({ description, user, statusUser }) {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg">
        <div className="p-[30px]">
          <p className="mb-[30px] text-primary">{description}</p>
          <div className="flex space-x-5">
            <div>
              <img src="/images/testimonials/testi-1.png" alt="slide-1" />
            </div>
            <div>
              <h5 className="text-primary font-medium">{user}</h5>
              <span className="inline-block text-sm text-primary/80 font-medium">
                {statusUser}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
