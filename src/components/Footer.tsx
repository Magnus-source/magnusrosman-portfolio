const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Magnus Rösman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
