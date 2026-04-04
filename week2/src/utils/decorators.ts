export function ExtendUser(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      // El primer argumento es el objeto usuario
      const user = args[0];
      const enrichedUser = {
        ...user,
        role: "user",
        createdAt: Date.now()
      };
      // Reemplazamos el argumento original con el enriquecido
      args[0] = enrichedUser;
      return originalMethod.apply(this, args);
    };
  }