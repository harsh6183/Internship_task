
export default function WelcomeLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-white z-50 text-center">
        <div className="mb-4 w-12 h-12 border-4 border-blue-600  border-t-transparent rounded-full animate-spin" />
      <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Welcome to Check Assignment Submission
      </h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Loading the project...
      </p>
    </div>
  );
}
