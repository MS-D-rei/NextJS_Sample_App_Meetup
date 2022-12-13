import React from "react"
import styles from '@/styles/Card.module.css'

interface CardProps {
  children: React.ReactNode;
}

export default function Card({children}: CardProps) {
  return <div className={styles.card}>{children}</div>
}