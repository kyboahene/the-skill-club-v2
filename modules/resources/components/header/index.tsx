"use client";

import React, { useEffect, useState } from "react";

import Navbar from "../../../layout/templates/main-nav";

//lib
import { cn } from "@/lib/utils";

// hooks
import useDebounce from "@/lib/hooks/use-debounce";
import useMediaQuery from "@/lib/hooks/use-media-query";

// store
import { Input } from "@/modules/shared/components/input";

const Hero = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [search, setSearch] = useState("");
  const debouncedSearchTerm = useDebounce<string>(search, 500);

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     dispatch(setSearchText(debouncedSearchTerm));
  //   }
  // }, [debouncedSearchTerm]);

  return (
    <section>
      <Navbar />
      <div className="flex justify-center py-16 md:py-28">
        <div className="relative w-full px-6 flex justify-center">
          <Input
            type="search"
            className="border rounded-[35px] px-5 py-4 w-[350px] md:w-full lg:w-[59.6em] md:mt-24"
            placeholder="Search skill"
            required
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
