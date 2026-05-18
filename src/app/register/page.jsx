import RegisterForm from "@/components/Register/RegisterForm";
import MyContainer from "@/components/shared/MyContainer";

export const metadata = {
  title: "Register - StudyNook",
  description:
    "StudyNook is a full-stack web application where students and library users can list study rooms they control (e.g., private rooms in a university library), and any registered user can browse, search, filter, and book those rooms for a specific date and time slot. ",
};

const RegisterPage = () => {
  return (
    <MyContainer className="pt-40 pb-20">
      <div className="text-center">
        <h3 className="text-[#0C0B0B] text-2xl font-semibold md:text-4xl">
          Register a StudyNook Account
        </h3>
        <p className="mt-4 text-[#6C696D] ">Start booking quiet rooms today.</p>
      </div>
      <div className="flex items-center justify-center mt-10 max-w-3xl mx-auto">
        <RegisterForm />
      </div>
    </MyContainer>
  );
};

export default RegisterPage;
