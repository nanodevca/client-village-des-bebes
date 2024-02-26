import Image from "next/image";
import Link from "next/link";

const OrganizationContent = () => {
  return (
    <>
      <div className="w-full h-[95rem] lg:h-[60rem] grid grid-rows-6 lg:grid-rows-1 lg:grid-cols-2">
        <div className="h-full w-full bg-blue-400 flex items-center justify-center row-span-2 lg:row-span-1 lg:col-span-1">
          <Image
            src="/assets/images/organization/IMG_0005.jpg"
            alt="Le VDBB"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-full w-full row-span-4 lg:row-span-1 lg:col-span-1 p-10">
          <h2 className="font-medium text-4xl text-darkblue ">
            L&apos;organisation
          </h2>
          <p className="mt-4 text-start font-normal text-lg text-darkblue">
            Le Village des Bébés est une initiative dédiée au soutien des
            familles et à la préservation de la diversité culturelle. Fondé sur
            l&apos;expérience personnelle d&apos;un parent, il offre une gamme
            d&apos;ateliers et d&apos;activités éducatives adaptés aux enfants
            de 0 à 5 ans. En mettant l&apos;accent sur l&apos;autonomie
            parentale, ce projet vise à créer un environnement inclusif où les
            familles peuvent se connecter, apprendre et s&apos;épanouir
            ensemble.
          </p>
          <div className="w-full mt-5 px-0 py-1 lg:px-5 lg:py-2 hidden lg:block">
            <div className="columns-1 md:columns-3 lg:columns-3">
              <Link href="/organization/about-us">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="/assets/images/organization/IMG_0170.jpg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        Qui sommes-nous ?
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/organization/about-us#story">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="/assets/images/organization/IMG_5675.jpeg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        L&apos;histoire
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/organization/about-us#team">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="/assets/images/organization/IMG_5666.jpeg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">L&apos;équipe</h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/organization/annual-reports">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="/assets/images/organization/pile-of-books.jpg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        Rapport annuel
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full mt-10 px-0 py-1 lg:px-5 lg:py-2 block lg:hidden">
            <div className="grid grid-rows-5 gap-y-4">
              <Link href="/organization/about-us">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/assets/images/organization/IMG_0170.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white">
                    Qui sommes-nous ?
                  </h1>
                </article>
              </Link>
              <Link href="/organization/about-us#story">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/assets/images/organization/IMG_5675.jpeg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white line-clamp-1">
                    L&apos;histoire
                  </h1>
                </article>
              </Link>
              <Link href="/organization/about-us#team">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/assets/images/organization/IMG_5666.jpeg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white">
                    L&apos;équipe
                  </h1>
                </article>
              </Link>
              <Link href="/organization/annual-reports">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/assets/images/organization/pile-of-books.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white">
                    Rapport annuel
                  </h1>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OrganizationContent };
