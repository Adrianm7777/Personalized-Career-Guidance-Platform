export const metadata = {
  title: "Registration Successful",
};

const successPage = () => {
  return (
    <div className="flex flex-col h-dvh justify-center items-center">
      <>
        <h1 className="text-2xl font-bold mb-4">Registration Successful</h1>
        <p>Thank you for registering! You can now log in to your account.</p>
      </>
    </div>
  );
};

export default successPage;
