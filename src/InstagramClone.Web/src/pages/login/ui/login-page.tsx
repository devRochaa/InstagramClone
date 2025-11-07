import { FormLogin, instaImg } from "..";
import LoginFooter from "./login-footer";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 grid-rows-6">
      {/* <!--Imagem celular --> */}
      <div className="row-span-5 justify-end hidden md:flex col-span-1">
        <img className="max-w-96" src={instaImg} alt="" />
      </div>

      {/* <!-- Formulário --> */}
      <main className="row-span-5 flex justify-center items-center flex-col col-span-1">
        <FormLogin />
      </main>

      {/* <!-- Rodapé --> */}
      <LoginFooter />
    </div>
  );
};

export default LoginPage;
