import React from "react";

// components
import Header from "../../components/header";

// lottie
import empty from "@/lottie/empty.json";

// component
import SkillCard from "../../components/skill-card";

// modules
import Footer from "@/modules/layout/templates/footer";

// use-cases
import { getSkillsUseCase } from "@/lib/use-cases/skill";

// lib
import { cn } from "@/lib/utils";
import LottieAnimation from "@/modules/shared/components/lottie-animation";

const ResourcesPageTemplate = async () => {
  const skills = await getSkillsUseCase();

  return (
    <section>
      <Header />
      <div className="relative flex justify-center max-sm:mb-48">
        <div className="md:container mx-auto flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.data.length > 0 ? (
              skills.data.map((skill) => (
                <SkillCard
                  skill={skill}
                  key={skill.id}
                  count={skill.resource.length}
                />
              ))
            ) : (
              <div
                className={cn(
                  "col-span-3 flex flex-col gap-8 justify-center items-center py-12"
                )}
              >
                <div className="h-[20em] w-[20em]">
                  <LottieAnimation animationData={empty} />
                </div>
                <h2 className="text-xl">
                  There are no resources available. Please come back later
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ResourcesPageTemplate;
