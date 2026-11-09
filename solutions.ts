const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier === undefined) {
    return value * 2;
  }
  return value * multiplier;
};

const processInput = (input: string | number | boolean) => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }
  if (typeof input === "number") {
    return input * 10;
  }
  if (typeof input === "boolean") {
    return input ? "Active" : "Inactive";
  }
};

function formatCoordinate([latitude, longitude, locationName]: readonly [number, number, string]): string {
  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const arr of arrays) {
    result.push(...arr);
  }
  return result;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const newArray: Course[] = courses.filter((course) => {
    if (course.isPublished && course.students >= minStudents) {
      return course;
    }
  });
  return newArray;
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  public getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      const err = Error("Access Denied: Must be 18 or older");
      err.stack = "";
      reject(err);
    } else {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    }
  });
}
