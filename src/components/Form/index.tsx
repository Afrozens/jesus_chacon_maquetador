/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styles from "./Form.module.css";
import {useForm} from "react-hook-form";
import ErrorMsg from "../ErrorMsg";
import {toast} from "react-hot-toast";

const initialForm: Form = {
  name: "",
  email: "",
  description: "",
  reason: "",
  condition: false,
};
const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Form>({defaultValues: initialForm});

  const onSubmit = async (data: Form) => {
    setTimeout(() => {
      if (data) {
        toast("Formulario enviado.");
        reset(initialForm);
      }
    }, 500);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.containerInput}>
        <input
          type="text"
          required
          placeholder="Nombre"
          className={errors.name && "error-input"}
          {...register("name", {
            required: "Nombre es requerido",
            minLength: {value: 3, message: "Nombre mas largo"},
            maxLength: {value: 12, message: "Nombre menos largo"},
          })}
        />
        <div className={styles.underline}></div>
      </div>
      {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}

      <div className={styles.containerInput}>
        <input
          type="email"
          required
          className={errors.email && "error-input"}
          placeholder="Email"
          {...register("email", {
            required: "Correo Electrónico es requerido",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Correo Electrónico no es valido",
            },
          })}
        />
        <div className={styles.underline}></div>
      </div>
      {errors.email && <ErrorMsg>{errors.email?.message}</ErrorMsg>}

      <select
        className={styles.select}
        {...register("reason", {required: true})}>
        <option value="">Razon</option>
        <option value="Colaboración">Colaboración</option>
        <option value="Incidencia">Incidencia</option>
        <option value="Otros">Otros</option>
      </select>
      {errors.reason && <ErrorMsg>Razon es requerido</ErrorMsg>}

      <div className={styles.containerInput}>
        <input
          type="text"
          required
          placeholder="Descripción"
          className={errors.description && "error-input"}
          {...register("description", {
            required: "Descripción es requerido",
            minLength: {value: 10, message: "Descripcion mas larga"},
          })}
        />
        <div className={styles.underline}></div>
      </div>
      {errors.description && <ErrorMsg>{errors.description?.message}</ErrorMsg>}

      <div className={styles.condition}>
        <input
          type="checkbox"
          {...register("condition", {
            required: {value: true, message: "Acepta para enviar"},
          })}
        />
        <label htmlFor="condition" className={errors.condition && "error"}>
          Acepto las{" "}
          <a href="https://www.spotify.com/mx/legal/end-user-agreement/">
            condiciones legales
          </a>
        </label>
      </div>

      <button type="submit" className={styles.submit}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
