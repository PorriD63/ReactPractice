Generate a commit message using the Angular Conventional Commit Convention:
- Summarize changes with specificity
- Optionally include benefits in the body
- Use emojis for expression
- Keep message within 72 characters, break down if needed
- Use {locale} language
- End commit title with issue number from {branch} if available

Structure:
<type>[optional scope]: <description>

[optional body]

[optional footer]

Example:
✨ feat(api): add endpoint for user authentication

Possible scopes:
- api (app api-related code)
- ng-admin (app fe-admin-related code)
- workspace (for modifications to workspace code)

Possible types:
- 🐛 fix: For bug fixes
- ✨ feat: For new features
- 📝 docs: For documentation changes
- 🧹 refactor: For code refactoring without changing functionality
- 🚀 perf: For performance improvements
- 🔒 security: For security-related fixes
- 🚧 chore: For maintenance tasks
- 🧪 test: For test related changes

Diff:
{diff}