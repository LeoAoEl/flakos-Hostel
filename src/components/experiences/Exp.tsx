import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { experiencias } from "@constants/experiences";

export const Experiencias = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeExperience, setActiveExperience] = useState(null); // Usa useState para manejar la experiencia activa

  // Esta función se encargará de abrir el modal con la experiencia seleccionada
  const openModal = (experience) => {
    setActiveExperience(experience); // Actualiza el estado con la experiencia seleccionada
    onOpen(); // Aquí lanzamos el modal con NextUI
  };

  return (
    <section className=" py-10">
      <h2 className="text-4xl font-bold text-center text-textPrimary mb-12">
        Experiencias en nuestro hostel
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {experiencias.map((experiencia) => (
          <div
            key={experiencia.title}
            className="bg-azulCielo shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(experiencia)} // Abrir modal con la experiencia seleccionada
          >
            <img
              src={experiencia.images[0]}
              alt={experiencia.title}
              className="h-48 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold text-textPrimary mb-4">
              {experiencia.title}
            </h3>
            <p className="text-textPrimary">{experiencia.description}</p>
          </div>
        ))}
      </div>

      {/* Modal que se abrirá cuando se seleccione una experiencia */}
      <Modal
        size={"5xl"}
        isOpen={isOpen}
        placement="auto"
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h3 className="text-2xl font-semibold text-textPrimary">
                  {activeExperience?.title}
                </h3>
              </ModalHeader>

              <ModalBody>
                <div className="relative">
                  <div className="flex overflow-x-auto space-x-4">
                    {activeExperience?.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={activeExperience?.title}
                        className="h-40 w-full object-cover rounded-md"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-textPrimary mt-4">
                  {activeExperience?.details}
                </p>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};
