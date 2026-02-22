# 🤝 Contributing Guide

Thank you for your interest in contributing to this project! This guide will help you get started.

## How to Contribute

### 1. Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-overlay.git
cd ai-overlay

# Create a new branch
git checkout -b feature/your-awesome-feature

# Install dependencies
npm install

# Start development
npm run dev
```

### 2. Types of Contributions

#### 🐛 Bug Fixes
```bash
git checkout -b fix/bug-name
# Fix the bug
npm run build  # Verify build succeeds
git commit -m "fix: describe the issue and solution"
```

#### ✨ New Features
```bash
git checkout -b feature/feature-name
# Add your feature with comments
npm run build
git commit -m "feat: feature name and benefits"
```

#### 📚 Documentation
```bash
git checkout -b docs/improve-docs
# Improve documentation
git commit -m "docs: type of improvements"
```

### 3. Code Standards

#### TypeScript
- ✅ Use `strict mode`
- ✅ Add types for all functions
- ✅ Avoid `any`
- ✅ Use interfaces for complex data

```typescript
// ✅ Good
interface ThoughtData {
  content: string;
  emotion: Emotion;
  timestamp: number;
}

function processThought(data: ThoughtData): void {
  // ...
}

// ❌ Avoid
function processThought(data: any): any {
  // ...
}
```

#### React
- ✅ Use modern Hooks
- ✅ Avoid class components
- ✅ Add comments for complex logic
- ✅ Use memo for heavy components

```typescript
// ✅ Good
const CompanionFace: React.FC<Props> = ({ emotion, personality }) => {
  const [blink, setBlink] = useState(false);
  
  useEffect(() => {
    // Complex logic here
  }, [emotion]);
  
  return <svg>{/* ... */}</svg>;
};
```

#### Style
- Use clear and descriptive names
- Add comments for complex sections
- Follow existing project patterns

### 4. Test Your Changes

```bash
# Build the project
npm run build

# Verify no errors
npm run dev

# Manual testing
# 1. Open the app
# 2. Test the new feature
# 3. Check console for errors
```

### 5. Commit Messages

Use this format:

```
type: short description (50 chars or less)

Detailed explanation if needed (for complex changes)

Example:
- What changed?
- Why?
- Side effects
```

Accepted types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Formatting (no code changes)
- `refactor:` - Restructure without changing functionality
- `perf:` - Performance improvements
- `test:` - Add/update tests

```bash
# Examples
git commit -m "feat: add new soldier personality"
git commit -m "fix: resolve animation conflict when switching personalities"
git commit -m "docs: clarify eye system in README"
```

### 6. Pull Request

```bash
# Push your branch
git push origin feature/your-awesome-feature
```

Then open a PR on GitHub:

**Title:**
```
[Feature/Fix/Docs] Clear descriptive name
```

**Description:**
```
## Description
What does this PR do?

## Type
- [x] Bug fix
- [ ] New feature
- [ ] Documentation improvement

## How to Test
Steps to verify the changes:
1. ...
2. ...

## Side Effects
Are there any side effects?

## Checklist
- [x] I tested the changes
- [x] Build is successful
- [x] No console errors
```

### 7. Code Review

- Be open to feedback
- Ask for clarification if unclear
- Suggest improvements kindly

## Contribution Ideas

### Easy (For Beginners)
- [ ] Add new personalities
- [ ] New movement patterns (CSS animations)
- [ ] Improve documentation
- [ ] New sound effects

### Intermediate
- [ ] Performance improvements
- [ ] New UI features
- [ ] Multi-language support
- [ ] Better testing

### Advanced
- [ ] Plugin system support
- [ ] Advanced storage system
- [ ] User behavior learning
- [ ] Web application version

## FAQ

**Q: Do I need permission to start working?**
A: No! Just start with a fork and pull request.

**Q: How long does review take?**
A: Usually 1-7 days depending on complexity.

**Q: Can I discuss an idea before starting work?**
A: Yes! Open an issue first.

**Q: Who maintains this project?**
A: Created by hmau
- 💬 Discord: hmau
- 📸 Instagram: @hma9u

---

**Thank you for contributing! 🎉**
