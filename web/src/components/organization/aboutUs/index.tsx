import Image from "next/image";
import Link from "next/link";
import { BlobCard } from "../../blobCard";

const AboutUsContent = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1">
        <div className="w-full h-[500px]">
          <div className="rounded-md h-full w-full relative">
            <Image
              alt=""
              width={2560}
              height={1440}
              className="w-full h-full object-cover"
              src="/assets/images/organization/IMG_0170.jpg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative">
                <h1 className="text-lg font-medium mb-4">Qui sommes-nous ?</h1>
              </div>
              <div className="relative">
                <h1 className="text-6xl font-bold mb-4">
                  Nous sommes <br />
                  Le Village des Bébés
                </h1>
              </div>
              <div className="relative">
                <h1 className="text-xl font-light mb-4">
                  Un OBNL qui met la communauté et la famille à la première
                  place.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:py-16 lg:px-8">
            <h2
              className="text-4xl lg:text-5xl font-bold text-darkblue mb-7"
              id="story"
            >
              Notre histoire
            </h2>
            <p className="mb-3 text-gray-500">
              L'histoire inspirante du Village des Bébés trouve ses racines dans
              le parcours personnel de <b>Nathalie Khadija Pesin</b>, une
              entrepreneure passionnée et engagée. Née au Sénégal, Nathalie a
              été témoin des nombreuses initiatives de sa mère,{" "}
              <b>Fatou-Marie Ndiaye</b>, spécialiste en économie sociale et
              familiale.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <p className="mb-3 text-gray-500">
                C&apos;est lorsque je suis devenue maman que l&apos;idée du
                village des bébé a commencé à prendre forme. En effet, j'ai
                ressenti le désir de transmettre ma culture africaine à ma fille
                dès son plus jeune âge. <br />
                Ma mère, comme directrice de garderie au Sénégal, organisait
                fréquemment des activités pour les jeunes enfants, je me
                souvenais de ses comptines et berceuses racontant
                l&apos;Afrique, ses poupées noires qu&apos;elle coud elle-même
                pour raconter ses histoires comme comme l&apos;histoire de
                Coumba am Ndeye et Coumba Amoul Ndeye (Traduction wolof, Coumba
                ayant une maman et Coumba sans maman, un conte courant au
                Sénégal). Mais comment transmettre ces belles histoires à ma
                fille, comment lui transmettre nos traditions? La faire voyager
                à travers les sons et sonorités africaines ? Lui faire gouter et
                découvrir les plats de chez nous ? <br />
                Au Canada, je ne trouvais pas de milieu assez diversifié pour
                que ma fille puisse s&apos;amuser en découvrant notre héritage
                africain. Alors quoi faire ? <br />
              </p>
              <p className="mb-3 text-gray-500">
                Ma réponse je l&apos;avais : Il faut tout un village pour élever
                un enfant ... pourquoi ne pas rassembler les communautés pour
                que nous puissions ensemble, partager nos coutumes à nos enfants
                ! C&apos;est ainsi qu&apos;est né l&apos;histoire du Village des
                bébés. <br />
                <br />
                Fortes de notre expérience internationale, notamment en France
                et au Sénégal, nous sommes fières de notre engagement à
                l'échelle mondiale. Ma mère, forte de plus de 20 ans d'expertise
                en économie sociale et familiale, a joué un rôle clé dans la
                création du Village des Bébés. Reconnue pour son leadership et
                ses valeurs humaines, elle a œuvré en France dans le secteur de
                la petite enfance et a ouvert la première crèche-garderie au
                Sénégal. Ma mère a contribué significativement au secteur de la
                petite enfance, tandis que j'ai été reconnue pour mon leadership
                au sein de la communauté sénégalaise au Canada.
              </p>
              <p className="mb-3 text-gray-500">
                Le Village des Bébés n'est pas seulement un projet, c'est une
                communauté dynamique qui s'est formée naturellement. Grâce à
                l'implication de chacun, le projet évolue constamment, reflétant
                l'essence même de la solidarité et de l'entraide. Bien que
                l'idée ait germé dans nos esprits, la beauté de ce projet réside
                dans le soutien et l'adhésion de la communauté qui l'ont
                propulsé. Le Village des Bébés s'est formé naturellement grâce à
                l'appui précieux de ceux qui partagent notre vision. En tant que
                fondateurs, nous croyons en un avenir inclusif et diversifié. Le
                Village des Bébés n'est pas seulement un lieu, c'est un
                mouvement vers un soutien mutuel, symbolisant la beauté de la
                diversité culturelle.
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-darkblue my-7">
              Le conseil d&apos;administration
            </h2>
            <div className="w-full px-10 py-5 grid grid-cols-1 lg:flex lg:justify-center lg:items-center gap-5">
              <div className="w-72 flex flex-col p-2">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full object-cover h-72 rounded-xl"
                  src="/assets/images/organization/IMG_1924.jpeg"
                />
                <h3 className="text-xl mt-3 font-bold text-darkblue text-start">
                  Nathalie Khadija Pesin
                </h3>
                <p className="text-gray-500 text-start text-lg">Présidente</p>
                <Link
                  className="text-darkblue text-start mt-3 underline"
                  href="#"
                >
                  LinkedIn {">"}
                </Link>
              </div>
              <div className="w-72 flex flex-col p-2">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-72 object-cover h-72 rounded-xl"
                  src="https://avatar.tobi.sh/tobiaslins.svg"
                />
                <h3 className="text-xl mt-3 font-bold text-darkblue text-start">
                  Seynabou Ndong
                </h3>
                <p className="text-gray-500 text-start text-lg">
                  Vice Présidente
                </p>
                <Link
                  className="text-darkblue text-start mt-3 underline"
                  href="#"
                >
                  LinkedIn {">"}
                </Link>
              </div>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-darkblue my-7"
              id="team"
            >
              L&apos;équipe
            </h2>
            <div className="w-full px-10 py-5 grid lg:grid-cols-4 grid-cols-1 lg:gap-7 gap-5 justify-center">
              <div className="w-full flex justify-center items-center">
                <BlobCard
                  image="https://avatar.tobi.sh/tobiaslins.svg"
                  personLink="#"
                  personName="Rosalie Ndione"
                  personStatus="Trésorière"
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <BlobCard
                  image="https://avatar.tobi.sh/tobiaslins.svg"
                  personLink="#"
                  personName="Abdoul Kaoussar Pindra"
                  personStatus="Secrétaire"
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <BlobCard
                  image="https://avatar.tobi.sh/tobiaslins.svg"
                  personLink="#"
                  personName="Ndeye-Khar Thérèse Cissé"
                  personStatus="Administratrice"
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <BlobCard
                  image="https://avatar.tobi.sh/tobiaslins.svg"
                  personLink="#"
                  personName="Fatou-Marie Ndiaye"
                  personStatus="Administratrice"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AboutUsContent };
