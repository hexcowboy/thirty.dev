import { IconCheck, IconLink, IconLoader2 } from "@tabler/icons-react";
import { Reorder } from "framer-motion";
import { useState } from "react";

const KanbanAnimation = () => {
  const [items1, setItems1] = useState([
    "Implement our AI chat UI",
    "Create my blog site",
    "Implement animations",
  ]);
  const [items2, setItems2] = useState(["Create my landing page"]);
  const [items3, setItems3] = useState([
    "Create analytics dashboard",
    "Build a UI kit",
  ]);

  return (
    <div className="grid w-full select-none grid-cols-1 gap-4 overflow-hidden p-4 lg:aspect-[7/3] lg:grid-cols-3">
      <KanbanColumn title="Queue">
        <Reorder.Group
          values={items1}
          onReorder={setItems1}
          className="flex flex-col gap-4"
        >
          {items1.map((item) => (
            <KanbanItem key={item} item={item} />
          ))}
        </Reorder.Group>
      </KanbanColumn>
      <KanbanColumn title="In Progress">
        <Reorder.Group
          values={items2}
          onReorder={setItems2}
          className="flex flex-col gap-4"
        >
          {items2.map((item) => (
            <KanbanItem
              key={item}
              item={item}
              icon={
                <span className="animate-spin">
                  <IconLoader2 size={16} className="text-blue-500" />
                </span>
              }
            />
          ))}
        </Reorder.Group>
      </KanbanColumn>
      <KanbanColumn title="Completed">
        <Reorder.Group
          values={items3}
          onReorder={setItems3}
          className="flex flex-col gap-4"
        >
          {items3.map((item) => (
            <KanbanItem
              key={item}
              item={item}
              icon={<IconCheck size={16} className="text-green-500" />}
            />
          ))}
        </Reorder.Group>
      </KanbanColumn>
    </div>
  );
};

const KanbanColumn = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="rounded-3xl p-8">
      <div className="flex items-center justify-between px-2 pb-6">
        <h3 className="text-sm font-bold uppercase text-neutral-700 dark:text-neutral-400">
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
};

const KanbanItem = ({
  item,
  icon,
}: {
  item: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Reorder.Item
      value={item}
      className="relative flex cursor-pointer grid-cols-2 flex-col gap-1 gap-4 rounded-xl bg-neutral-100 p-4 text-left dark:bg-neutral-900"
    >
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold">{item}</div>
        {icon}
      </div>
      <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
        <IconLink size={12} /> Design assets
      </div>
    </Reorder.Item>
  );
};

export default KanbanAnimation;
