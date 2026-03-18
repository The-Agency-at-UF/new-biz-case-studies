type AddCompanyButtonProps = {
  onClick?: () => void;
};

export default function AddCompanyButton({ onClick }: AddCompanyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        w-[360px]
        rounded-full
        bg-[rgba(83,1,215,0.5)]
        text-white
        py-3
        font-medium
        backdrop-blur-md
        border border-white/10
        hover:bg-[rgba(83,1,215,0.7)]
        transition
        shadow-md
      "
    >
      + Add Company
    </button>
  );
}