export default function PricingCard({children}) {
    return (
      <div className="bg-white mt-8 mx-auto flex flex-col shadow rounded-lg">
        {children}
      </div>
    );
  }