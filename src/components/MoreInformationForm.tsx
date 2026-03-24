import { useState } from "react";
import { useForm } from "react-hook-form";
import './styles/MoreInformationForm.css';
import Button from "./ui/Button";
import { whatsappIcon } from "./FakeSVGIcons";

export default function MoreInformationForm() {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (formData) => {
    setData(formData);
    console.log(data);
    // Adicione lógica para enviar os dados, como abrir WhatsApp
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      style={{background: 'rgba(255, 255, 255, 0.03)'}}
      className="w-full max-w-140 py-11 px-10 rounded-[28px] border border-gray-800 text-start flex flex-col gap-6"
    >
      <h1 className="font-[Cormorant_Garamond] text-3xl mb-[20px]">Solicite mais informações</h1>
      <div className="flex w-full gap-3">
        <fieldset className="flex flex-col w-full">
          <label>Nome Completo</label>
          <input {...register("firstName")} placeholder="Seu nome" className="rounded-xl py-3.25 px-4 text-sm border border-gray-800" style={{background: 'rgba(255, 255, 255, 0.04)'}}/>
        </fieldset>
        
        <fieldset className="flex flex-col w-full">
          <label>CRP</label>
          <input {...register("crp")} placeholder="CRP 06/000000" className="rounded-xl py-3.25 px-4 text-sm border border-gray-800" style={{background: 'rgba(255, 255, 255, 0.04)'}}/>
        </fieldset>
      </div>

      <fieldset className="flex flex-col">
        <label>Telefone / WhatsApp</label>
        <input {...register("phone")} placeholder="(11) 99999-9999" className="rounded-xl py-3.25 px-4 text-sm border border-gray-800" style={{background: 'rgba(255, 255, 255, 0.04)'}}/>
      </fieldset>

      <fieldset className="flex flex-col">
        <label>Interesse</label>
        <select {...register("interest", { required: true })} className="rounded-xl py-3.25 px-4 text-sm border border-gray-800 appearance-none" style={{background: 'rgba(255, 255, 255, 0.04)'}}>
          <option className="bg-[#1a1030]" value="" selected disabled>Selecione uma opção</option>
          <option className="bg-[#1a1030]" value="1">Locação de sala avulsa</option>
          <option className="bg-[#1a1030]" value="2">Plano mensal de salas</option>
          <option className="bg-[#1a1030]" value="3">Plano Premium + Rede Claramente</option>
          <option className="bg-[#1a1030]" value="4">Supervisão clínica</option>
          <option className="bg-[#1a1030]" value="5">Endereço profissional</option>
          <option className="bg-[#1a1030]" value="6">Quero conhecer tudo</option>
        </select>
      </fieldset>
      
      <fieldset className="flex flex-col">
        <label>Mensagem</label>
        <textarea {...register("message")} placeholder="Conte sobre sua atuação e o que está buscando..." className="rounded-xl py-3.25 px-4" style={{background: 'rgba(255, 255, 255, 0.04)'}}/>
      </fieldset>
      
      <Button className="bg-green-300 flex gap-3 py-4 px-8 justify-center items-center rounded-xl text-black text-sm cursor-pointer font-semibold" type="submit">
        <div className="h-4 w-4">
          <svg
            style={{width: '18px', height: '18px'}}
            viewBox={whatsappIcon.viewBox} 
            fill={whatsappIcon.fill} 
          >
            <path d={whatsappIcon.d} />
          </svg>
        </div>

        Enviar pelo WhatsApp
      </Button>
    </form>
  );
}