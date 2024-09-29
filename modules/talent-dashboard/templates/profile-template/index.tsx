import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/modules/shared/components/tabs";
import React from "react";
import ProfileOverview from "../../components/profile-overview";
import ProfileEdit from "../../components/profile-edit";
import ProfileResumeTemplate from "../profile-resume-template";

const TalentProfileTemplate = () => {
  return (
    <section className="pt-20">
      <Tabs defaultValue="overview">
        <TabsList className="flex justify-start border-b">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="edit">Edit Profile</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <ProfileOverview />
        </TabsContent>
        <TabsContent value="edit">
          <ProfileEdit />
        </TabsContent>
        <TabsContent value="resume">
          <ProfileResumeTemplate />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default TalentProfileTemplate;
