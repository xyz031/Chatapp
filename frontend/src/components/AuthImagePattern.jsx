const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 ">
      <div className="max-w-md text-center text-white">
        {/* Circular Animated Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-full bg-secondary ${
                i % 2 === 0 ? "animate-pulse" : "animate-bounce"
              }`}
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold mb-4 drop-shadow-md">{title}</h2>
        {/* Subtitle */}
        <p className="text-white/70 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
