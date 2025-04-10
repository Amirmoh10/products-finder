import styles from "./Stack.module.css";

type StackProps = {
  align?: string;
  gap: number;
  children: React.ReactNode;
};

function Stack({ align = "flex-start", gap, children }: StackProps) {
  return (
    <div className={styles.stack} style={{ rowGap: gap, justifyItems: align }}>
      {children}
    </div>
  );
}

export default Stack;
