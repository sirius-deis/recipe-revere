import { FC } from "react"
import styles from './columnList.module.css'

interface ColumnListProps {
  items: any[];
  numberOfColumns?: number
}

const ColumnList: FC<ColumnListProps> = ({ items = [], numberOfColumns }) => {
  const columnCount = Math.min(numberOfColumns || 999, 3)
  return <div className={styles['column-list']} style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}>
    {items.map((item, index) => (
      <div key={index} className={styles['list-item']}>{item}</div>
    ))}
  </div>
}

export default ColumnList;