# 3D Apple Website

An interactive Apple-inspired product website featuring a 3D MacBook model, built with React, Three.js, and Tailwind CSS.

> 🔗 **Live Demo:** [Click here to view the live demo](#) ← _replace with your deployment URL_

---

## 📸 Preview

> _Replace the placeholders below with your actual screenshots_

| Hero Section                                                                 | 3D Product Viewer                                                                                |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ![Hero Screenshot](https://via.placeholder.com/480x270?text=Hero+Screenshot) | ![Product Viewer Screenshot](https://via.placeholder.com/480x270?text=Product+Viewer+Screenshot) |

---

## 🎬 Demo Video

> _Replace the placeholder below with your actual demo video_

<!-- Option 1: Embed a YouTube video -->
<!-- [![Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID) -->

<!-- Option 2: Embed a local or hosted video file -->
<!-- <video src="https://your-video-url.com/demo.mp4" controls width="100%"></video> -->

![Demo Video Placeholder](https://via.placeholder.com/800x450?text=Demo+Video+Coming+Soon)

---

## 📖 About

This project is an Apple-style landing page showcasing an interactive 3D MacBook 14 model. Users can view and interact with the model in real time directly in the browser. The goal was to recreate a modern, performant, and visually compelling product page inspired by Apple's design language.

### Features

- 🖥️ Interactive 3D MacBook model (GLTF/GLB)
- 🎥 Video integration on the laptop display
- 🧭 Responsive navigation bar
- 🎨 Apple-inspired UI with Tailwind CSS
- 🗃️ Global state management with Zustand

---

## 🛠️ Tech Stack

| Technology                                                       | Purpose                                        |
| ---------------------------------------------------------------- | ---------------------------------------------- |
| [React 19](https://react.dev/)                                   | UI Framework                                   |
| [Vite](https://vitejs.dev/)                                      | Build tool & dev server                        |
| [Three.js](https://threejs.org/)                                 | 3D rendering engine. Rendered within Canvas    |
| [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)     | React renderer for Three.js                    |
| [@react-three/drei](https://github.com/pmndrs/drei)              | Helper library for R3F (camera, loaders, etc.) |
| [Tailwind CSS v4](https://tailwindcss.com/)                      | Utility-first styling                          |
| [Zustand](https://zustand-demo.pmnd.rs/)                         | Lightweight state management                   |
| [gltfjsx](https://github.com/pmndrs/gltfjsx)                     | Generates JSX components from GLTF models      |
| [GSAP](https://gsap.com/)                                        | Animation library for scroll & motion effects  |
| [@gsap/react](https://gsap.com/resources/react/)                 | Official React integration for GSAP            |
| [react-responsive](https://github.com/yocontra/react-responsive) | Media query hooks for responsive rendering     |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or a compatible package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Michelle-bit-web/3d-apple-design.git
cd 3d-apple-design

# Install dependencies
npm install
```

### Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## 🧩 Generating React Components from 3D Models

This project uses [gltfjsx](https://github.com/pmndrs/gltfjsx) to convert `.glb` files into clean, optimized React components.

### Why gltfjsx?

Instead of manually loading and traversing the GLTF scene graph, `gltfjsx` auto-generates a typed JSX component that maps every mesh, material, and node directly — making the model easy to control from React.

### Usage

Navigate to the folder containing your `.glb` file and run:

```bash
cd public/models
npx gltfjsx macbook-14.glb -T
```

#### Flags explained

| Flag        | Description                                                                                |
| ----------- | ------------------------------------------------------------------------------------------ |
| _(none)_    | Generates a `Macbook-14.jsx` component in the current directory                            |
| `-T`        | Applies **Draco/MeshOpt compression** transforms via `@gltf-transform` to reduce file size |
| `-t`        | Adds TypeScript types to the generated component                                           |
| `-r <path>` | Sets the root path for the model URL (e.g. `/models`)                                      |
| `--shadows` | Adds `castShadow` / `receiveShadow` to all meshes                                          |

#### Example output

The command generates a file like `Macbook-14.jsx`:

```jsx
import { useGLTF } from "@react-three/drei";

export function MacBook(props) {
  const { nodes, materials } = useGLTF("/models/macbook-14-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry} material={materials.Aluminium} />
      {/* ... more nodes */}
    </group>
  );
}

useGLTF.preload("/models/macbook-14-transformed.glb");
```

Move the generated file into `src/components/` (or keep it in `public/models/`) and import it like any other React component.

> ⚠️ Make sure the `.glb` file is placed inside `public/models/` so Vite serves it as a static asset.

---

## 📁 Project Structure

```
├── public/
│   ├── fonts/
│   ├── models/        # 3D models (.glb) & generated JSX components
│   └── videos/        # Videos for the laptop display
├── src/
│   ├── components/    # React components (Hero, NavBar, Productviewer)
│   ├── constants/     # Static data & configuration
│   ├── store/         # Zustand store
│   ├── App.jsx
│   └── main.jsx
```
