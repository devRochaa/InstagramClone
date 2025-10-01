import React from "react";
import { appleImg, googleImg, intaLogo } from "..";

const FormLogin = () => {
  return (
    <>
      <form
        action=""
        className="w-80 flex flex-col justify-center items-center shadow-[0_0_0_0.3px_black] rounded-sm px-10 py-4 gap-5"
      >
        <img className="w-52" src={intaLogo} alt="" />
        <input
          type="text"
          placeholder="Número de Telefone ou e-mail"
          className="bg-slate-50 h-9 w-full pl-3 shadow-[0_0_0_0.3px_black] rounded-sm"
        />
        <input
          type="text"
          placeholder="Senha"
          className="bg-slate-50 h-9 w-full pl-3 shadow-[0_0_0_0.3px_black] rounded-sm"
        />

        <button className="bg-blue-400 w-full rounded-md h-8 text-slate-50 hover:bg-blue-200 transition delay-50 duration-150 ease-in-out">
          Entrar
        </button>

        <a className="text-blue-800 font-bold cursor-pointe" href="">
          Logar com o Facebook
        </a>
        <a href="" className="text-blue-800 cursor-pointer text-sm">
          Esqueci minha senha
        </a>
      </form>

      <div className="shadow-[0_0_0_0.3px_black] rounded-sm w-80 my-4 text-center py-4">
        <p>
          Não tem conta ?{" "}
          <a className="text-blue-400 font-bold cursor-pointer">Cadastrar-se</a>
        </p>
      </div>

      <p className="">Baixe o Aplicativo</p>

      <div className="flex gap-2 mt-4">
        <img className="h-10 cursor-pointer" src={appleImg} alt="" />
        <img className="h-10 cursor-pointer" src={googleImg} alt="" />
      </div>
    </>
  );
};

export default FormLogin;
