import "../styles/container-title.css"

const ContainerTitle = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="container-title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#fff"
        width={24}
        height={24}
        className="size-6">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499"
        />
      </svg>
      <h3>{children}</h3>
    </div>
  );
};

export default ContainerTitle;
