import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Course = {
    uniqueId: string;
    courseCode: string;
    name: string;
    faculty: string;
};
export type CourseSchedule = {
    uniqueId: string;
    courseId: string;
    startTime: string;
    durationInMinutes: number;
};
export type Student = {
    uniqueId: string;
    rollNo: number;
    name: string;
    password: string;
};
export type User = {
    id: number;
    name: string;
};
export type DB = {
    Course: Course;
    CourseSchedule: CourseSchedule;
    Student: Student;
    User: User;
};
