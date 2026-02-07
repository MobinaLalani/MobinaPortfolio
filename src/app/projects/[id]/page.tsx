import PhotoSlider from "@/components/ui/photoSlider/PhotoSlider";
import ProjectIndex from "@/components/section/project/Index";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

const ProjectPage = async ({ params }: Props) => {
  const { id } = await params;

  console.log("Id:", id); // ← تو ترمینال
  return <>
    {/* <div>Project ID: {id}</div>
    <PhotoSlider /> */}
    <ProjectIndex projectId ={Number(id)}/>
  </>;

  
};

export default ProjectPage;
