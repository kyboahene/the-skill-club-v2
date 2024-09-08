import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/modules/shared/components/tabs";
import React from "react";

const TalentProfileTemplate = () => {
  return (
    <section className="pt-20">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-black text-white rounded-[35px]">
          <TabsTrigger
            value="account"
            className="hover:bg-white rounded-md overflow-hidden"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        <TabsContent value="resume">Change your resume here.</TabsContent>
      </Tabs>
    </section>
  );
};

export default TalentProfileTemplate;
